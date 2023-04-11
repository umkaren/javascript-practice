// creating class
class job {
    constructor(name, industry, requiresDegree, field, salaryRange) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.salaryRange = salaryRange;
    }
        getName() {
            return `The job title of this position is ${this.name}.`;
        }

        getFieldAndIndustry() {
            return `It is in the ${this.field} field in the ${this.industry} industry.`;
        }

        getDegreeAndSalary() {
            return `Requires a degree: ${this.requiresDegree}. The expected salary range is: ${this.salaryRange}.`;
        }
    
}
// extending class
class workconditions extends job {
    constructor(name, industry, requiresDegree, field, salaryRange, worksite, exemptStatus) {
    super(name, industry, requiresDegree, field, salaryRange);
    this.worksite = worksite;
    this.exemptStatus = exemptStatus;
    }
    getOnsite() {
        return super.getName(this.name) + ` This position is ${this.worksite}.`
    }
    getExemptStatus() {
        return `It is ${this.exemptStatus}.`
    }
}

// 3 instances of job class + console log of 2 methods for each instance
const job1 = new job ('accountant', 'financial services', 'yes', 'financial accounting', '$55,000 - $115,000')
    console.log(job1.getName())
    console.log(job1.getDegreeAndSalary())
const job2 = new job ('model', 'fashion', 'no', 'retail', '$44,000 - $65,000')
    console.log(job2.getFieldAndIndustry())
    console.log(job2.getDegreeAndSalary())
const job3 = new job ('call center agent', 'customer service', 'no', 'patient services', '$35,000 - $45,000')
    console.log(job3.getName())
    console.log(job3.getFieldAndIndustry())

// 1 instance of extended class with 2 new methods
const job4 = new workconditions ('line cook', 'food service', 'no', 'culinary arts', '$30,000 - $38,000', 'onsite', 'non-exempt')
    console.log(job4.getOnsite())
    console.log(job4.getExemptStatus())