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
    
    /* DEFENDANT DETAILS */
    req.session.data['defendant-first-name'] = "Sam"
    req.session.data['defendant-last-name'] = "Smith"
    req.session.data['defendant-address-line-1'] = "38A Baker Street"
    req.session.data['defendant-address-line-2'] = "London"
    req.session.data['defendant-address-line-3'] = ""
    req.session.data['defendant-address-line-4'] = ""
    req.session.data['defendant-address-postcode'] = "W1 7SX"
    
    res.redirect('/map/find_your_case')
        
});

/* ************** */
/* ************** */
/* ************** */
/* FIND YOUR CASE */
router.post('/map/find_your_case', function (req, res) {
    
    res.redirect('/map/your_details')
    
});

/* ************ */
/* ************ */
/* ************ */
/* YOUR DETAILS */
router.post('/map/your_details', function (req, res) {
    
    res.redirect('/map/your_plea')
    
});

/* ********* */
/* ********* */
/* ********* */
/* YOUR PLEA */
router.post('/map/your_plea', function (req, res) {
    
    res.redirect('/map/guilty_plea')
    
});

/* *********** */
/* *********** */
/* *********** */
/* GUILTY PLEA */
router.post('/map/guilty_plea', function (req, res) {
    
    res.redirect('/map/guilty_plea_reason')
    
});

/* ****************** */
/* ****************** */
/* ****************** */
/* GUILTY PLEA REASON */
router.post('/map/guilty_plea_reason', function (req, res) {
    
    res.redirect('/map/not_guilty_plea')
    
});

/* **************** */
/* **************** */
/* **************** */
/* NOT GUILTY PLEA  */
router.post('/map/not_guilty_plea', function (req, res) {
    
    res.redirect('/map/your_court_hearing')
    
});

/* ******************* */
/* ******************* */
/* ******************* */
/* YOUR COURT HEARING  */
router.post('/map/your_court_hearing', function (req, res) {
    
    res.redirect('/map/your_finances')
    
});

/* ************** */
/* ************** */
/* ************** */
/* YOUR FINANCES  */
router.post('/map/your_finances', function (req, res) {
    
    res.redirect('/map/your_income')
    
});

/* ************ */
/* ************ */
/* ************ */
/* YOUR INCOME  */
router.post('/map/your_income', function (req, res) {
    
    res.redirect('/map/deductions_from_earnings')
    
});

/* ************************* */
/* ************************* */
/* ************************* */
/* DEDUCTIONS FROM EARNINGS  */
router.post('/map/deductions_from_earnings', function (req, res) {
    
    res.redirect('/map/your_employment')
    
});

/* **************** */
/* **************** */
/* **************** */
/* YOUR EMPLOYMENT  */
router.post('/map/your_employment', function (req, res) {
    
    res.redirect('/map/your_benefits')
    
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
    
    res.redirect('/map/your_monthly_outgoings')
    
});

/* *********************** */
/* *********************** */
/* *********************** */
/* YOUR MONTHLY OUTGOINGS  */
router.post('/map/your_monthly_outgoings', function (req, res) {
    
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
    
    res.redirect('/map/confirmation')
    
});

/* ************ */
/* ************ */
/* ************ */
/* CONFIRMATION */
router.post('/map/confirmation', function (req, res) {
    
    res.redirect('../')
    
});
