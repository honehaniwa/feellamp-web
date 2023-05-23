// ランプの光の要素を取得
const lampLights = document.querySelectorAll('.lamp-light');
length = [90, 180, 270, 360, 450];
persent = [50, 78, 85, 90, 95];
function changeColorTemperature(cct) {
    // 色温度に基づいて光の色を変更
    var color = chroma.temperature(cct).hex();
    lampLights.forEach((lampLight, index) => {
        lampLight.style.backgroundColor = color;
        lampLight.style.width = `${(length[index])}%`;
        lampLight.style.height = `${(length[index])}%`;
        lampLight.style.opacity = 1 - (persent[index] / 100);
    });
    // 色温度の値を表示
    var cctValueElement = document.getElementById('cctValue');
    cctValueElement.textContent = cct;
}

// 初期表示時に色温度を反映
changeColorTemperature(5000);

function saveColorTemperature(slot) {
    var cctSlider = document.getElementById("cctSlider");
    var cctValue = cctSlider.value;
    localStorage.setItem("savedCCT" + slot, cctValue);
}

function loadColorTemperature(slot) {
    var savedCCT = localStorage.getItem("savedCCT" + slot);
    if (savedCCT) {
        var cctSlider = document.getElementById("cctSlider");
        cctSlider.value = savedCCT;
        changeColorTemperature(savedCCT);
    }
}

// // ページを離れる前にLocalStorageをクリア
// window.addEventListener("beforeunload", function() {
//     localStorage.clear();
// });