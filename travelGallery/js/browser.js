var country = ['China', 'Japan','Italy','America']
var city = [
    ['Shanghai','Kunming','Beijing','Yantai'],
    ['Tokyo', 'Osaka', 'Kamakura'],
    ['Roma','Milan','Venice','Florence'],
    ['New York','San Francisco', 'Washington']];

var countryE = document.getElementById("country");
var cityE = document.getElementById("city");
//初始化国家下拉列表
for(var i = 0; i < country.length; i++) {
    //新的option
    var option = new Option();
    //赋值
    option.appendChild(document.createTextNode(country[i]));
    //插入
    countryE.appendChild(option)
}
//为国家下拉列表添加事件
countryE.addEventListener('change', function(){
    //另城市列表变为初始状态，可以注释掉查看效果
    cityE.options.length = 1;
    //如果国家选择不为默认值
    if(countryE.selectedIndex !== 0) {
        //遍历相应国家的城市
        for(var j = 0; j < city[countryE.selectedIndex - 1].length; j++) {
            var option2 = new Option(city[countryE.selectedIndex-1][j],city[countryE.selectedIndex-1][j])
            cityE.options.add(option2)
        }
    }
});