<template lang="pug">
section
  div#chartdiv1
  div#chartdiv2
</template>
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import sapporo_2018 from "@/static/sapporo_2018.json";
export default {
  name: "Amcharts",
  data() {
    return {
      sapporo_2018
    };
  },
  mounted() {
    this.drawChart1();
    this.drawChart2();
  },
  methods: {
    drawChart1() {
      const chart = am4core.create("chartdiv1", am4charts.XYChart);
      chart.data = this.sapporo_2018;
      // x軸
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      // グリッド間隔
      dateAxis.renderer.minGridDistance = 60;
      // y軸
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      // 時系列データ
      const series = chart.series.push(new am4charts.LineSeries());
      series.name = "temperature";
      series.dataFields.valueY = "temperature";
      series.dataFields.dateX = "date";
      series.tooltipText = "{valueY}";
      series.tooltip.pointerOrientation = "vertical";
      // カーソルに追従するライン
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;
      // スクロールバー
      //chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarX = new am4core.Scrollbar();
    },
    drawChart2() {
      const chart = am4core.create("chartdiv2", am4charts.PieChart);
      // グラフデータ定義 Add data
      chart.data = [
        {
          sex: "男",
          number: 200
        },
        { sex: "女", number: 100 },
        { sex: "ねこ", number: 100 }
      ];
      // シリーズ定義 Add and configure Series, reating a series, Regular Pie chart
      const pieSeries = chart.series.push(new am4charts.PieSeries()); //シリーズ生成
      pieSeries.dataFields.value = "number"; //Setting up series 値
      pieSeries.dataFields.category = "sex"; //Setting up series カテゴリ

      //凡例表示 add legend
      chart.legend = new am4charts.Legend();
      chart.legend.position = "bottom";
      chart.legend.marginTop = 50;
      chart.legend.marginBottom = 20;

      // データラベルの表示内容変更 ************** //
      //スライスラベル コンテンツ spec05-1 Changing slice label content View_Total_Sales_formatted
      pieSeries.labels.template.text =
        "{category} ： {value.value}" +
        " 人 " +
        "( {value.percent.formatNumber('#.0')} % )";

      //スライスツールチップ コンテンツ spec05-2 Changing tooltip content
      pieSeries.slices.template.tooltipText =
        "{category} ： {value.value}" +
        " 人 " +
        "( {value.percent.formatNumber('#.0')} % )";

      //凡例の値 spec05-3 Changing legend value
      chart.legend.valueLabels.template.text =
        "{value.value}" + " ( {value.percent.formatNumber('#.0')} % )";
    }
  }
};
</script>
<style lang="sass" scoped>
#chartdiv1
  width: 100%
  height: 400px
#chartdiv2
  width: 100%
  height: 400px
</style>
