var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var radarChart = null;
Page({
    data: {
    },
    touchHandler: function (e) {
        console.log(radarChart.getCurrentDataIndex(e));
    },
    onReady: function (e) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        radarChart = new wxCharts({
            canvasId: 'radarCanvas',
            type: 'radar',
            legend:false,
            categories: ['1', '2', '3'],
            series: [{
                data: [30,50,40],
                color:'#000',
                fontSize:10
            }],
            dataLabel:true,
            dataPointShape:true,   
            width: windowWidth,
            height: 200,
            extra: {
                radar: {
                    max: 50,
                    gridColor:'#000',
                    labelColor:'#333'
                }
            },
        });
    }
});