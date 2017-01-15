$(document).ready(function() {

    if(navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(function(position) {
    		/*$.getJSON("http://v.juhe.cn/weather/geo?format=2&key=be82f5c4b1c66f2a44ea689973cf9fda&lon=" + position.coords.longitude + 
    			"&lat=" + position.coords.latitude + "&callback=?",function(json) {//获取聚合数据接口数据*/
    		$.getJSON("json/data.json",function(json){//获取本地文件data.json里的json对象
				var json_keys = Object.keys(json);//获取json_obj对象的键key，存入数组json_keys
				json_keys.forEach(function(json_key) {//遍历数组json_keys，
					if(json_key == "result") {//如果数组json_keys的某一个键等于result，将此键的对象值赋值给变量result_obj
					//if(typeof(json_obj[json_key]) == "object") {//另一种写法：如果数组json_keys的某一个键等于result，将此键的对象值赋值给变量result_obj
						var result_obj = json[json_key];
						var result_keys = Object.keys(result_obj);//获取result_obj对象的键key，存入数组result_keys
						result_keys.forEach(function(result_key) {
							if(result_key == "sk") {
							var sk_obj = result_obj[result_key];
							var sk_keys = Object.keys(sk_obj);
							sk_keys.forEach(function(sk_key) {
								if(sk_key == "humidity") {//显示湿度
									var humidity = sk_obj[sk_key];
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
								if(today_key == "temperature" || today_key == "weather" || today_key == "wind" || today_key == "week" || 
								today_key == "city" || today_key == "date_y") {//显示当天天气详情
									var temperature = today_obj[today_key];
									var temperature_span = document.createElement("span");
									var temperature_span_text = document.createTextNode(temperature + " ");
									temperature_span.appendChild(temperature_span_text);
									//document.getElementById("temperature").appendChild(temperature_span);
									$("#temperature").append(temperature_span);
								}
								if(today_key == "dressing_index") {//显示穿衣指数
									var dressing_index = today_obj[today_key];
									var dressing_span = document.createElement("span");
									var dressing_span_text = document.createTextNode(dressing_index);
									dressing_span.appendChild(dressing_span_text);
									//document.getElementById("dressing_index").appendChild(dressing_span);
									$("#dressing_index").append(dressing_span);
								}
								if(today_key == "wash_index") {//显示洗车指数
									var wash_index = today_obj[today_key];
									var wash_span = document.createElement("span");
									var wash_span_text = document.createTextNode(wash_index);
									wash_span.appendChild(wash_span_text);
									//document.getElementById("wash_index").appendChild(wash_span);
									$("#wash_index").append(wash_span);
								}
								if(today_key == "travel_index") {//显示旅行指数
									var travel_index = today_obj[today_key];
									var travel_span = document.createElement("span");
									var travel_span_text = document.createTextNode(travel_index);
									travel_span.appendChild(travel_span_text);
									//document.getElementById("travel_index").appendChild(travel_span);
									$("#travel_index").append(travel_span);
								}
								if(today_key == "exercise_index") {//显示锻炼指数
									var exercise_index = today_obj[today_key];
									var exercise_span = document.createElement("span");
									var exercise_span_text = document.createTextNode(exercise_index);
									exercise_span.appendChild(exercise_span_text);
									//document.getElementById("exercise_index").appendChild(exercise_span);
									$("#exercise_index").append(exercise_span);
								}
								if(today_key == "uv_index") {//显示紫外线指数
									var uv_index = today_obj[today_key];
									var uv_span = document.createElement("span");
									var uv_span_text = document.createTextNode(uv_index);
									uv_span.appendChild(uv_span_text);
									//document.getElementById("uv_index").appendChild(uv_span);
									$("#uv_index").append(uv_span);
								}
							});
							}
							if(result_key == "future") {
								var future_obj = result_obj[result_key];
								var table_weath = document.createElement("table");
								var table_tr = document.createElement("tr");
								for(var i = 1; i < future_obj.length; i ++) {
									var table_td = document.createElement("td");
									var futureI = future_obj[i];
									var futureI_keys = Object.keys(futureI);
									futureI_keys.forEach(function(futureI_key) {
										if(futureI_key == "weather_id") return;
										var futureI_p = document.createElement("p");
										var futureI_p_text = document.createTextNode(futureI[futureI_key]);
										futureI_p.appendChild(futureI_p_text);
										table_td.appendChild(futureI_p);				
									});
									table_tr.appendChild(table_td);
								}
								table_weath.appendChild(table_tr);
								var div_table = document.createElement("div");
								//div_table.addClass("text-center");
								div_table.appendChild(table_weath);
								$("body").append(div_table);
							}
						});					
					}	
				});
			});
		});
	}
});