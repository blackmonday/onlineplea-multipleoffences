const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

/* ******************* */
/* ******************* */
/* ******************* */
/* PROTOTYPE DASHBOARD */
router.post('/', function (req, res) {
    
    res.redirect('/map/start_page')
    
});

/* ********** */
/* ********** */
/* ********** */
/* START PAGE */
router.post('/map/start_page', function (req, res) {
    
    /* DEFENDANTS DETAILS */
    req.session.data['defendant-first-name'] = "Sam"
    req.session.data['defendant-last-name'] = "Smith"
    req.session.data['defendant-address-line-1'] = "38A Baker Street"
    req.session.data['defendant-address-line-2'] = "London"
    req.session.data['defendant-address-line-3'] = ""
    req.session.data['defendant-address-line-4'] = ""
    req.session.data['defendant-address-postcode'] = "W1 7SX"
    /*
    req.session.data['home-telephone'] = "0123456789"
    req.session.data['mobile'] = "0123456789"
    req.session.data['additional-number'] = "0123456789"
    req.session.data['email-1'] = "abc@xyz.com"
    req.session.data['email-2'] = "xyz@abc.com"
    req.session.data['dob-day'] = "11"
    req.session.data['dob-month'] = "11"
    req.session.data['dob-year'] = "1111"
    req.session.data['nin'] = "AB 12 34 56 C"
    */
    
    /* DEFENDANTS NEW DETAILS */
    req.session.data['new-defendant-first-name'] = req.session.data['defendant-first-name']
    req.session.data['new-defendant-last-name'] = req.session.data['defendant-last-name']
    req.session.data['new-defendant-address-line-1'] = req.session.data['defendant-address-line-1']
    req.session.data['new-defendant-address-line-2'] = req.session.data['defendant-address-line-2']
    req.session.data['new-defendant-address-line-3'] = req.session.data['defendant-address-line-3']
    req.session.data['new-defendant-address-line-4'] = req.session.data['defendant-address-line-4']
    req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']
    
    /* CASE DETAILS */
    req.session.data['urn'] = "0123456789"
    
    /* CHARGE 1DETAILS */
    req.session.data['charge-1-title'] = "Using a vehicle uninsured against third party risks"
    req.session.data['charge-1-description'] = "On 7 March 2019 the driver of a motor vehicle, name FORD ESCORT, was driving the vehcile that was not insured"

    /* CHARGE 2 DETAILS */
    req.session.data['charge-2-title'] = "Driving otherwise than in accordance with a driving licence"
    req.session.data['charge-2-description'] = "On 7 March 2019 the driver of a motor vehicle, name FORD ESCORT, did not provide a valid drivers license"

    /* CHARGE 3 DETAILS */
    req.session.data['charge-3-title'] = "Speeding - exceed 30 miles per hour on restricted road - manned camera device"
    req.session.data['charge-3-description'] = "On 7 March 2019 at EDMONTON drove a motor vehicle, name FORD ESCORT, on a restricted road, namely A1010, THE GREEN, EDMONTON, , at a speed exceeding 30 miles per hour namely 38 MPH"

    /* PLEA DETAILS */
    //req.session.data['mitigation-guilty'] = "I sorry... I promise I won't do it again."
    //req.session.data['mitigation-not-guilty'] = "I didn't do it! Honest!"
    
    /* COURT HEARING DETAILS */
    //req.session.data['court-interpreter-language'] = "Spanish"
    //req.session.data['court-interpreter-b-language'] = "French"
    //req.session.data['prosecution-witness-details'] = "Bob - HE'S NOT TO BE TRUSTED!"
    //req.session.data['your-witness-details'] = "Jane - she will confirm I'm innocent"
    //req.session.data['dates-to-avoid-details'] = "Monday's"
    
    /* INCOME DETAILS */
    //req.session.data['other-employment-details'] = "Are you sure I'm not employed?"
    //req.session.data['weekly-income'] = "100"
    //req.session.data['fortnightly-income'] = "200"
    //req.session.data['monthly-income'] = "300"
    //req.session.data['yearly-income'] = "400"
    //req.session.data['which-benefits'] = "Child benefit"

    
    
    
    
    
    
    /* COMPANY DETAILS */
    //req.session.data['company-name'] = "ABC Company"
    //req.session.data['company-reference-number'] = "1234567890"
    //req.session.data['company-address-line-1'] = "Address line 1"
    //req.session.data['company-address-line-2'] = "Address line 2"
    //req.session.data['company-address-line-3'] = "Address line 3"
    //req.session.data['company-address-line-4'] = "Address line 4"
    //req.session.data['company-address-postcode'] = "Postcode"
    //req.session.data['company-telephone'] = "0123456789"
    
    /* MONTHLY OUTGOINGS */
    req.session.data['accomodation'] = ""
    req.session.data['council-tax'] = ""
    req.session.data['household-bills'] = ""
    req.session.data['travel-expenses'] = ""
    req.session.data['child-maintenance'] = ""
    req.session.data['more-expenses-detail'] = ""
    req.session.data['more-expenses-amount'] = ""
    
    /* CHECK IF ALL SECTIONS HAVE BEEN COMPLETED OR NOT */
    req.session.data['i-made-it-to-check-your-answers'] = "No"
    
    
    
    
    
    res.redirect('/map/find_your_case')
        
});

/* ************** */
/* ************** */
/* ************** */
/* FIND YOUR CASE */
router.post('/map/find_your_case', function (req, res) {
    
    /* FORM VALIDATION */
    var your_urn = req.session.data['your-urn'];
    var your_postcode = req.session.data['your-postcode'];
    
    if ((your_urn == "") && (your_postcode == "")) {
        req.session.data['validation-check'] = "URN and postcode error"
        res.redirect('/map/find_your_case')
    } else if (your_urn == "") {
        req.session.data['validation-check'] = "URN error"
        res.redirect('/map/find_your_case')
    } else if (your_postcode == "") {
        req.session.data['validation-check'] = "Postcode error"
        res.redirect('/map/find_your_case')
    } else {
        req.session.data['validation-check'] = ""
        res.redirect('/map/your_details')
    }
    
});

/* ************ */
/* ************ */
/* ************ */
/* YOUR DETAILS */
router.post('/map/your_details', function (req, res) {
    
    var are_these_details_correct = req.session.data['are-these-details-correct'];
    var email_1 = req.session.data['email-1'];
    var dob_day = req.session.data['dob-day'];
    var dob_month = req.session.data['dob-month'];
    var dob_year = req.session.data['dob-year'];
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers'];
        
    if (check_your_answers != "Yes") {
        
        if (are_these_details_correct == "Yes") {
            req.session.data['validation-check'] = ""
            //res.redirect('/map/your_plea')
            
        } else if (are_these_details_correct == "No") {
            /* DEFENDANTS NEW DETAILS */
            req.session.data['defendant-first-name'] = req.session.data['new-defendant-first-name']
            req.session.data['defendant-last-name'] = req.session.data['new-defendant-last-name']
            req.session.data['defendant-address-line-1'] = req.session.data['new-defendant-address-line-1']
            req.session.data['defendant-address-line-2'] = req.session.data['new-defendant-address-line-2']
            req.session.data['defendant-address-line-3'] = req.session.data['new-defendant-address-line-3']
            req.session.data['defendant-address-line-4'] = req.session.data['new-defendant-address-line-4']
            req.session.data['defendant-address-postcode'] = req.session.data['new-defendant-address-postcode']
            
            req.session.data['validation-check'] = ""
            //res.redirect('/map/your_plea')
            
        } else {
            req.session.data['validation-check'] = "Are these details correct error"
            
        }
        
        if (email_1 == "") {
            req.session.data['email-1-query'] = "email 1 error"
        } else {
            req.session.data['email-1-query'] = ""
        }
        
        if ((dob_day == "") || (dob_month == "") || (dob_year == "")) {
            req.session.data['dob-query'] = "dob error"
        } else {
            req.session.data['dob-query'] = ""
        }
        
        var validation_check_answer = req.session.data['validation-check'];
        
        if ((validation_check_answer == "Are these details correct error") || (email_1 == "") || (dob_day == "") || (dob_month == "") || (dob_year == "")) {
            res.redirect('/map/your_details')
        } else {
            res.redirect('/map/your_plea')
        }
        
    } else {
        res.redirect('/map/check_your_answers')
    }
        
});

/* ********* */
/* ********* */
/* ********* */
/* YOUR PLEA */
router.post('/map/your_plea', function (req, res) {
    
    var charge_1_plea = req.session.data['charge-1-plea']
    var charge_2_plea = req.session.data['charge-2-plea']
    var charge_3_plea = req.session.data['charge-3-plea']

    // IF ALL PLEAS ARE GUILTY
    if ((charge_1_plea == "Guilty") && (charge_2_plea == "Guilty") && (charge_3_plea == "Guilty")) {
        
        req.session.data['plea-counter'] = "1" 
        
        res.redirect('/map/guilty_plea')
    
    // ALL PLEAS ARE NOT GUILTY
    } else if ((charge_1_plea == "Not guilty") && (charge_2_plea == "Not guilty") && (charge_2_plea == "Not guilty")) {
        
        req.session.data['plea-counter'] = "1" 

        res.redirect('/map/not_guilty_plea')
    
    // IF A MIX OF PLEASE AND FIRST PLEA IS GUILTY
    } else if (charge_1_plea == "Guilty") {
        
        req.session.data['plea-counter'] = "2"
        
        res.redirect('/map/guilty_plea')
    
    // IF A MIX OF PLEASE AND FIRST PLEA IS NOT GUILTY
    } else if (charge_1_plea == "Not guilty") {

        req.session.data['plea-counter'] = "2"
        
        res.redirect('/map/not_guilty_plea')
    }
            
        
});

/* *********** */
/* *********** */
/* *********** */
/* GUILTY PLEA */
router.post('/map/guilty_plea', function (req, res) {
    
    var come_to_court = req.session.data['come-to-court'];
    var charge_1_plea = req.session.data['charge-1-plea'];
    var charge_2_plea = req.session.data['charge-2-plea'];
    var charge_3_plea = req.session.data['charge-3-plea'];
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers'];
            
    if (come_to_court == "Yes") {
        req.session.data['guilty-plea-court-query'] = ""
        res.redirect('/map/guilty_plea_reason')
    } else if ((come_to_court == "No") && ((charge_1_plea == "Not guilty") || (charge_2_plea == "Not guilty") || (charge_3_plea == "Not guilty"))) { 
        req.session.data['plea-counter']--;
        if (req.session.data['plea-counter'] <= 0) {
            if (check_your_answers != "Yes") {
                req.session.data['guilty-plea-court-query'] = ""
                res.redirect('/map/your_finances')
            } else {
                req.session.data['guilty-plea-court-query'] = ""
                res.redirect('/map/check_your_answers')
            }
        }
        res.redirect('/map/not_guilty_plea')
    } else if (come_to_court == "No") {
        req.session.data['plea-counter']--;
        if (check_your_answers != "Yes") {
            req.session.data['guilty-plea-court-query'] = ""
            res.redirect('/map/your_finances')
        } else {
            req.session.data['guilty-plea-court-query'] = ""
            res.redirect('/map/check_your_answers')
        }
    } else if ((come_to_court != "Yes") || (come_to_court != "No")) {
        req.session.data['guilty-plea-court-query'] = "error"
        res.redirect('/map/guilty_plea')
    }
        
});

/* ****************** */
/* ****************** */
/* ****************** */
/* GUILTY PLEA REASON */
router.post('/map/guilty_plea_reason', function (req, res) {
    
    var charge_1_plea = req.session.data['charge-1-plea'];
    var charge_2_plea = req.session.data['charge-2-plea'];
    var charge_3_plea = req.session.data['charge-3-plea'];
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers'];
    
    if ((charge_1_plea == "Not guilty") || (charge_2_plea == "Not guilty") || (charge_3_plea == "Not guilty")) {
        req.session.data['plea-counter']--;
        if (req.session.data['plea-counter'] <= 0) {
            if (check_your_answers != "Yes") {
                res.redirect('/map/your_finances')
            } else {
                res.redirect('/map/check_your_answers')
            }
        }
        res.redirect('/map/not_guilty_plea')
    } else {
        req.session.data['plea-counter']--;
        if (check_your_answers != "Yes") {
            res.redirect('/map/your_court_hearing')
        } else {
            res.redirect('/map/check_your_answers')
        }
    }
    
});

/* **************** */
/* **************** */
/* **************** */
/* NOT GUILTY PLEA  */
router.post('/map/not_guilty_plea', function (req, res) {
    
    var charge_1_plea = req.session.data['charge-1-plea'];
    var charge_2_plea = req.session.data['charge-2-plea'];
    var charge_3_plea = req.session.data['charge-3-plea'];
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers'];
    var mitigation_not_guilty = req.session.data['mitigation-not-guilty'];
    
    req.session.data['come-to-court-not-guilty'] = "Yes";
    
    if (mitigation_not_guilty == "") {
        req.session.data['not-guilty-plea-query'] = "error"
        res.redirect('not_guilty_plea')
        
    } else if (mitigation_not_guilty != "") {
        req.session.data['not-guilty-plea-query'] = "no error"
        
        if ((charge_1_plea == "Guilty") || (charge_2_plea == "Guilty") || (charge_3_plea == "Guilty")) {
            req.session.data['plea-counter']--;
            if (req.session.data['plea-counter'] <= 0) {
                if (check_your_answers != "Yes") {
                    res.redirect('/map/your_court_hearing')
                } else {
                    res.redirect('/map/check_your_answers')
                }
            }
            res.redirect('/map/guilty_plea')
        } else {
            req.session.data['plea-counter']--;
            if (check_your_answers != "Yes") {
                res.redirect('/map/your_court_hearing')
            } else {
                res.redirect('/map/check_your_answers')
            }
        }

    }
        
});

/* ******************* */
/* ******************* */
/* ******************* */
/* YOUR COURT HEARING  */
router.post('/map/your_court_hearing', function (req, res) {
    
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers'];

    if (check_your_answers != "Yes") {
        res.redirect('/map/your_finances')
    } else {
        res.redirect('/map/check_your_answers')
    }
    
});

/* ************** */
/* ************** */
/* ************** */
/* YOUR FINANCES  */
router.post('/map/your_finances', function (req, res) {
    
    var your_finances_ng = req.session.data['your-finances-ng'];
    var your_finances_g_other = req.session.data['your-finances-g-other'];
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers'];
    
    if ((your_finances_ng == "Yes") || (your_finances_g_other == "Yes") || (your_finances_g_other == "No")) {
        res.redirect('/map/your_income');
    } else if ((your_finances_ng == "No")) {
        if (check_your_answers != "Yes") {
            res.redirect('/map/your_outgoings');
        } else {
            res.redirect('/map/check_your_answers')
        }
    } else if(your_finances_ng == "I have no income or benefits") {
        if (check_your_answers != "Yes") {
            res.redirect('/map/your_outgoings');
        } else {
            res.redirect('/map/check_your_answers')
        }
    }
    
});

/* ************ */
/* ************ */
/* ************ */
/* YOUR INCOME  */
router.post('/map/your_income', function (req, res) {
    
    var weekly_income = req.session.data['weekly-income']
    var fortnightly_income = req.session.data['fortnightly-income']
    var monthly_income = req.session.data['monthly-income']
    var yearly_income = req.session.data['yearly-income']
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers'];
    
    req.session.data['weekly-income'] = parseFloat(weekly_income).toFixed(2)
    req.session.data['fortnightly-income'] = parseFloat(fortnightly_income).toFixed(2)
    req.session.data['monthly-income'] = parseFloat(monthly_income).toFixed(2)
    req.session.data['yearly-income'] = parseFloat(yearly_income).toFixed(2)
    
    var income_frequency = req.session.data['income-frequency']
    var claiming_benefits = req.session.data['claiming-benefits']
    
    if ((income_frequency == "I have no income") && (claiming_benefits == "Yes")) {
        if (check_your_answers != "Yes") {
            res.redirect('/map/your_benefits');
        } else {
            res.redirect('/map/check_your_answers')
        }
        
    } else if ((income_frequency == "I have no income") && (claiming_benefits == "No")) {
        if (check_your_answers != "Yes") {
            res.redirect('/map/your_outgoings');
        } else {
            res.redirect('/map/check_your_answers')
        }
        
    } else {
        if (check_your_answers != "Yes") {
            res.redirect('/map/deductions_from_earnings');
        } else {
            res.redirect('/map/check_your_answers')
        }

    }
    
});

/* ************************* */
/* ************************* */
/* ************************* */
/* DEDUCTIONS FROM EARNINGS  */
router.post('/map/deductions_from_earnings', function (req, res) {
    
    var deduct_from_earnings = req.session.data['deduct-from-earnings'];
    var claiming_benefits = req.session.data['claiming-benefits'];
    
    if (deduct_from_earnings == "Yes") {
        req.session.data['deduct-from-earnings-query'] = ""
        res.redirect('/map/your_employment')
    } else if (deduct_from_earnings == "No") {
        
        if (claiming_benefits == "Yes") {
            req.session.data['deduct-from-earnings-query'] = ""
            res.redirect('/map/your_benefits')
        } else {
            req.session.data['deduct-from-earnings-query'] = ""
            res.redirect('/map/your_outgoings')
        }
        
    } else {
        req.session.data['deduct-from-earnings-query'] = "error"
        res.redirect('/map/deductions_from_earnings')
        
    }
    
});

/* **************** */
/* **************** */
/* **************** */
/* YOUR EMPLOYMENT  */
router.post('/map/your_employment', function (req, res) {
    
    var claiming_benefits = req.session.data['claiming-benefits']
    
    if (claiming_benefits == "Yes") {
        res.redirect('/map/your_benefits')
    } else {
        res.redirect('/map/your_outgoings')
    }    
    
});

/* ************** */
/* ************** */
/* ************** */
/* YOUR BENEFITS  */
router.post('/map/your_benefits', function (req, res) {
    
    res.redirect('/map/your_outgoings')
    
});

/* *************** */
/* *************** */
/* *************** */
/* YOUR OUTGOINGS  */
router.post('/map/your_outgoings', function (req, res) {
    
    var give_details_of_outgoings = req.session.data['give-details-of-outgoings'];
    
    if (give_details_of_outgoings == "Yes") {
        req.session.data['give-outgoing-details-query'] = ""
        res.redirect('/map/your_monthly_outgoings')
        
    } else if (give_details_of_outgoings == "No") {
        req.session.data['give-outgoing-details-query'] = ""

        /* CHECK IF ALL SECTIONS HAVE BEEN COMPLETED OR NOT */
        req.session.data['i-made-it-to-check-your-answers'] = "Yes"
        
        res.redirect('/map/check_your_answers')
        
    } else {
        req.session.data['give-outgoing-details-query'] = "error"
        res.redirect('/map/your_outgoings')
        
    }
        
});

/* *********************** */
/* *********************** */
/* *********************** */
/* YOUR MONTHLY OUTGOINGS  */
router.post('/map/your_monthly_outgoings', function (req, res) {
        
    var more_expenses = req.session.data['more-expenses'];
    
    if (more_expenses == "Yes") {
        var total = 
            Number(req.session.data['accomodation']) + 
            Number(req.session.data['council-tax']) + 
            Number(req.session.data['household-bills']) + 
            Number(req.session.data['travel-expenses']) + 
            Number(req.session.data['child-maintenance']) + 
            Number(req.session.data['more-expenses-amount'])
    } else {
        var total = 
            Number(req.session.data['accomodation']) + 
            Number(req.session.data['council-tax']) + 
            Number(req.session.data['household-bills']) + 
            Number(req.session.data['travel-expenses']) + 
            Number(req.session.data['child-maintenance'])
    }

    req.session.data['more-expenses-total'] = parseFloat(total).toFixed(2)

    /* CHECK IF ALL SECTIONS HAVE BEEN COMPLETED OR NOT */
    req.session.data['i-made-it-to-check-your-answers'] = "Yes"

    res.redirect('/map/check_your_answers')
    
});

/* ******************* */
/* ******************* */
/* ******************* */
/* CHECK YOUR ANSWERS  */
router.post('/map/check_your_answers', function (req, res) {
    
    res.redirect('/map/declaration')
    
});

/* *********** */
/* *********** */
/* *********** */
/* DECLARATION */
router.post('/map/declaration', function (req, res) {
    
    var declaration = req.session.data['declaration'];
    
    if (declaration == "I confirm") {
        req.session.data['declaration-query'] = ""
        res.redirect('/map/confirmation')
        
    } else {
        req.session.data['declaration-query'] = "error"
        res.redirect('/map/declaration')
        
    }
    
});

/* ************ */
/* ************ */
/* ************ */
/* CONFIRMATION */
router.post('/map/confirmation', function (req, res) {
    
    res.redirect('/prototype-admin/clear-data')
    
});
