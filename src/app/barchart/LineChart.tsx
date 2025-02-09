"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const createDateRangeArray = (startDate: Date, endDate: Date) => {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}

const labels = createDateRangeArray(new Date(2020, 0, 0), new Date(2021, 0, 0))

const dataArray = labels.map(() => 0.5);

const data = {
    labels: labels.map((date) => date.toISOString().split("T")[0]),
    datasets: [
        {
            label: "Sample Data",
            data: dataArray,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
    ],
};

const indexAxis: "x" | "y" = "y";

const options = {
    responsive: true,
    indexAxis: indexAxis,
    maintainAspectRatio: false,
    scales: {
        x: {
            min: 0,
            max: 1,
            ticks: {
                stepSize: 1,
            },
        },
        y: {
            reverse: true,
        },
    },
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Sample Bar Chart",
        },
    },
};

const LineChart: React.FC = () => {
    return <div style={{ width: "1200px", height: "1800px" }}><Line data={data} options={options} /></div>;
};

export default LineChart;
