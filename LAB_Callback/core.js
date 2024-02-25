function waitForFood(foodData) {
// ได้อาหารแล้ววว
console.log(foodData);
}
function grabOrderFood(foodData, callback) {
// รอร้านทำอาหาร 2 วินาที
setTimeout(function () {
    debugger;
    // ร้านอาหารทำเสร็จและเพิ่มข้อมูล
    foodData.box = 'Foam';
    callback(foodData);
}, 2000);
}
debugger;
let foodData = { "name": "Burger", "orderId": 111 };
grabOrderFood(foodData, waitForFood);
function hello() {
    return 1;
}
function tryHello(callback) {
    return callback();
}
console.log(hello());     // 1
console.log(hello);       // Function
console.log(tryHello(hello));    // 1
console.log(tryHello(hello()));