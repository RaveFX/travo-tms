import PieChart from "components/chart/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";

export default function Piechart() {
    return (
        <PieChart
            chartData={pieChartData}
            chartOptions={pieChartOptions}
        />
    );
}