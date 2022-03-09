// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if ((Number.isInteger(mass))&&(Number.isInteger(height)))
        if (mass<=0)
        {
            return "INVALID INPUT"
        }
        else if (height<=0)
        {
            return "INVALID INPUT"
        }
        else
        {
            BMI = mass/(height*height)
            return BMI
        }
    else{
        return "INVALID INPUT"
    }
        
}

module.exports = BMICalculator;
