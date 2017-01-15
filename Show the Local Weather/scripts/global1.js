$(document).ready(function() {
	var jsons;
	var lon;//经度
	var lat;//纬度
	var temperature;//天气温度
	var humidity;//湿度
	var dressing_index;//穿衣指数
	var wash_index;//洗车指数
	var travel_index;//旅行指数
	var exercise_index;//锻炼指数
	var uv_index;//紫外线指数

    function getJsonLength(jsonData){//获取json对象的长度
        var jsonLength = 0;  
        for(var item in jsonData){  
            jsonLength++;  
        }  
        return jsonLength;  
    }  

	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			lon = position.coords.longitude;
			lat = position.coords.latitude;
			$("#loca_data").html("latitude: " + lat + "<br>longitude: " + lon);
		});
	}
	
    $.getJSON("http://v.juhe.cn/weather/geo?format=2&key=be82f5c4b1c66f2a44ea689973cf9fda&lon=116.39277&lat=39.933748" + "&callback=?",function(json){
    	jsons = JSON.stringify(json);
    	alert(getJsonLength(jsons) + "; " + jsons);
	//$.getJSON("json/data.json",function(json){//获取本地文件data.json里的json对象
		jsons.forEach(function(json_obj) {//遍历json对象
			var json_keys = Object.keys(json_obj);//获取json_obj对象的键key，存入数组json_keys
			json_keys.forEach(function(json_key) {//遍历数组json_keys，
				if(json_key == "result") {//如果数组json_keys的某一个键等于result，将此键的对象值赋值给变量result_obj
				//if(typeof(json_obj[json_key]) == "object") {//另一种写法：如果数组json_keys的某一个键等于result，将此键的对象值赋值给变量result_obj
					var result_obj = json_obj[json_key];
					var result_keys = Object.keys(result_obj);//获取result_obj对象的键key，存入数组result_keys
					result_keys.forEach(function(result_key) {
						if(result_key == "sk") {
							var sk_obj = result_obj[result_key];
							var sk_keys = Object.keys(sk_obj);
							sk_keys.forEach(function(sk_key) {
								if(sk_key == "humidity") {//显示湿度
									humidity = sk_obj[sk_key];
									var humidity_span = document.createElement("span");
									var humidity_span_text = document.createTextNode(humidity);
									humidity_span.appendChild(humidity_span_text);
									//document.getElementById("humidity").appendChild(humidity_span);	
									$("#humidity").append(humidity_span);																	
								}
							});
						} 
						if(result_key == "today") {
							var today_obj = result_obj[result_key];
							var today_keys = Object.keys(today_obj);
							today_keys.forEach(function(today_key) {
								if(today_key == "temperature") {//显示天气温度
									temperature = today_obj[today_key];
									var temperature_span = document.createElement("span");
									var temperature_span_text = document.createTextNode(temperature);
									temperature_span.appendChild(temperature_span_text);
									//document.getElementById("temperature").appendChild(temperature_span);
									$("#temperature").append(temperature_span);
								}
								if(today_key == "dressing_index") {//显示穿衣指数
									dressing_index = today_obj[today_key];
									var dressing_span = document.createElement("span");
									var dressing_span_text = document.createTextNode(dressing_index);
									dressing_span.appendChild(dressing_span_text);
									//document.getElementById("dressing_index").appendChild(dressing_span);
									$("#dressing_index").append(dressing_span);
								}
								if(today_key == "wash_index") {//显示洗车指数
									wash_index = today_obj[today_key];
									var wash_span = document.createElement("span");
									var wash_span_text = document.createTextNode(wash_index);
									wash_span.appendChild(wash_span_text);
									//document.getElementById("wash_index").appendChild(wash_span);
									$("#wash_index").append(wash_span);
								}
								if(today_key == "travel_index") {//显示旅行指数
									travel_index = today_obj[today_key];
									var travel_span = document.createElement("span");
									var travel_span_text = document.createTextNode(travel_index);
									travel_span.appendChild(travel_span_text);
									//document.getElementById("travel_index").appendChild(travel_span);
									$("#travel_index").append(travel_span);
								}
								if(today_key == "exercise_index") {//显示锻炼指数
									exercise_index = today_obj[today_key];
									var exercise_span = document.createElement("span");
									var exercise_span_text = document.createTextNode(exercise_index);
									exercise_span.appendChild(exercise_span_text);
									//document.getElementById("exercise_index").appendChild(exercise_span);
									$("#exercise_index").append(exercise_span);
								}
								if(today_key == "uv_index") {//显示紫外线指数
									uv_index = today_obj[today_key];
									var uv_span = document.createElement("span");
									var uv_span_text = document.createTextNode(uv_index);
									uv_span.appendChild(uv_span_text);
									//document.getElementById("uv_index").appendChild(uv_span);
									$("#uv_index").append(uv_span);
								}
							});
						}
					});					
				}				
			});			
		});
	});
	return jsons;
});