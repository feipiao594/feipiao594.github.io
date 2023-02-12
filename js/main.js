window.onload = (event) => {
    // console.log(event);
    main();
}

function main() {
    const ccs = document.querySelector("#ccs");
    // 设置画布的宽高
    ccs.width = 400;
    ccs.height = 400;
    // console.dir(ccs);

    const ccsContext = ccs.getContext("2d");
    
    // 画直线
    ccsContext.beginPath();
    ccsContext.moveTo(0, 0); // 画笔的起点
    ccsContext.lineTo(100, 100); // 画笔的终点，第一个参数表示向左移动 100 像素，，第二个参数表示向下移动 100 像素
    ccsContext.stroke();
}
