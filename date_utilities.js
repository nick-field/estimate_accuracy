var date_utilities = {};
date_utilities.currentQuarterStartDate = function()
{
    var now = new Date();
    var quarter = Math.floor((now.getMonth()/3));
    return new Date(now.getFullYear(), quarter * 3, 1);
};

date_utilities.currentQuarterEndDate= function()
{
    var now = new Date();
    var quarter = Math.floor((now.getMonth()/3));
    var firstDate = new Date(now.getFullYear(), quarter * 3, 1);
    return new Date(firstDate.getFullYear(), firstDate.getMonth() + 3, 0);
}

date_utilities.previousQuarterStartDate= function()
{
    var now = new Date();
    var quarter = Math.floor((now.getMonth()/3));
    var year = now.getFullYear();
    
    quarter -= 1;
    if(quarter < 0)
    {
        quarter = 3;
        year -= 1;
    } 

    return new Date(year, quarter * 3, 1);
}

date_utilities.previousQuarterEndDate = function()
{
    var now = new Date();
    var quarter = Math.floor((now.getMonth()/3));
    var year = now.getFullYear();
    
    quarter -= 1;
    if(quarter < 0)
    {
        quarter = 3;
        year -= 1;
    } 
    
    var firstDate = new Date(year, quarter * 3, 1);
    return new Date(firstDate.getFullYear(), firstDate.getMonth() + 3, 0);
}