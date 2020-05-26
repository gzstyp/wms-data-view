;(function($){
	var thisPage = {
		init:function(){
            this.initDom();
		},
		initDom:function(){
            $('#time').text(this.getCurrentDate());
            thisPage.methods.getMaterialsList();
            thisPage.methods.progress();
		},
        getCurrentDate : function(){
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var day = now.getDate();
            var clock = year + "-";
            if(month < 10) clock += "0";
            clock += month + "-";
            if(day < 10) clock += "0";
            clock += day;
            var minute = now.getMinutes();
            var hour = now.getHours();
            if(minute < 10){
                minute = ":0"+minute;
            }else{
                minute = ":"+minute;
            }
            if(hour < 10){
                hour = " 0"+hour;
            }else{
                hour = " "+hour;
            }
            clock += hour;
            clock += minute;
            return clock;
        },
        methods : {
            goods_list : function(){
                var data = [
                    {
                        "goods_name" : "棉被类",
                        "goods_code" : "20200508-01",
                        "stock" : "198件",
                        "out_total" : "18件",
                        "out_time" : "2020-05-20 10:42"
                    },
                    {
                        "goods_name" : "折叠类",
                        "goods_code" : "20200508-02",
                        "stock" : "258件",
                        "out_total" : "160件",
                        "out_time" : "2020-05-26 09:20"
                    },
                    {
                        "goods_name" : "服装类",
                        "goods_code" : "20200508-03",
                        "stock" : "258件",
                        "out_total" : "160件",
                        "out_time" : "2020-06-28 12:41"
                    },
                    {
                        "goods_name" : "帐篷类",
                        "goods_code" : "20200508-04",
                        "stock" : "108件",
                        "out_total" : "18件",
                        "out_time" : "2020-06-27 10:41"
                    },
                    {
                        "goods_name" : "工作灯类",
                        "goods_code" : "20200508-04",
                        "stock" : "129件",
                        "out_total" : "108件",
                        "out_time" : "2020-06-27 10:41"
                    },
                    {
                        "goods_name" : "发电机类",
                        "goods_code" : "20200508-04",
                        "stock" : "208件",
                        "out_total" : "138件",
                        "out_time" : "2020-06-27 10:41"
                    },
                    {
                        "goods_name" : "应急包类",
                        "goods_code" : "20200508-04",
                        "stock" : "110件",
                        "out_total" : "165件",
                        "out_time" : "2020-06-27 10:41"
                    }
                ];
                return data;
            },
            getMaterialsList : function(){
                var html = '';
                var list = thisPage.methods.goods_list();
                $.each(list,function(index,data){
                    html += '<tr>';
                    html += '<td style="width:180px;height:30px;">'+data.goods_name+'</td>';
                    html += '<td style="width:160px;height:30px;">'+data.goods_code+'</td>';
                    html += '<td style="width:76px;height:30px;text-align:center;">'+data.stock+'</td>';
                    html += '<td style="width:76px;height:30px;text-align:center;">'+data.out_total+'</td>';
                    html += '<td style="width:120px;height:30px;">'+data.out_time+'</td>';
                    html += '</tr>';
                });
                $('#table_materials tbody').html(html);
            },
            /*给予jquery的进度条,三列数据*/
            progress : function(){
                $(".progress-part-first").animate({ width: "24%" },300);
                $(".progress-part-second").animate({ width: "28%" },400);
                $(".progress-part-third").animate({ width: "48%" },500);
                $("#wz_zd").animate({ width:"10%" },800);
                $("#wz_fz").animate({ width:"30%" },800);
                $("#wz_zp").animate({ width:"26%" },800);
                $("#wz_gzd").animate({ width:"50%" },800);
                $("#wz_fdj").animate({ width:"90%" },800);
                $("#wz_yjb").animate({ width:"100%" },800);
            }
        }
	};
	thisPage.init();
})(jQuery);