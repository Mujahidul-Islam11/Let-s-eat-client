import React from 'react';
import Chart from 'react-google-charts';
import useMenu from '../../../hooks/useMenu';

const StatsChart = () => {
    const [menu] = useMenu();
    const chefs = menu.filter(item => item.category === "Chef's Specials");
    const salads = menu.filter(item => item.category === "Salads");
    const beverages = menu.filter(item => item.category === "Beverages");
    
    
    const data = [
        ["Category", "Category percentage"],
        ["Chef's Specials", chefs.length],
        ["Salads", salads.length],
        ["Beverages", beverages.length],
    ];

    return (
        <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"400px"}
        />
    );
};

export default StatsChart;
