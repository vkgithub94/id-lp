import {Modal,ModalBody} from 'reactstrap';
import React, { Component } from 'react'
import success_checked from '../imgs/checked.png';
import './Top.css';
import Glob from '../imgs/direct.png';
import OroLogo from '../imgs/logo.png';
import HowItWorks from '../imgs/how_it_works.jpg';

class GetStarted extends Component {

    state = { email:'',
              phoneNo:''
            };
  
    handleSubmit = (event) => {
      event.preventDefault();
      const data = {
      email: this.state.email,
      phone: this.state.phoneNo,
      Platform: "Invoice_Discounting",
      type: "ORO-Invoice_Discounting-CONTACT_FORM"
    }
  
      const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch('https://india.orowealth.com/funds/userRegistrationInfo', requestOptions)
      .then(response => response.json())
      .then(response => {
          if(response.success) {
            this.setState(
              { 
                modalOpen: true,
                email:'',
                phoneNo:''
              })
          }
      });
    };   
   
    render(){
    return (
        <div className="pt-5 container-fluid">
        <div className='d-lg-flex container-main row'>
            
            <div className="row col-lg-6 col-md-12 pt-5 mt-5">
                <img className="mx-auto gob-img mt-5 pl-4" src={Glob} alt="img" />
            </div>
            <div className="mx-auto d-flex flex-column pl-5 col-md-12 col-lg-6">
                <a href="https://www.orowealth.com/"><img style={{height:'60px'}} src={OroLogo} alt="Oro-logo" /></a>
                <p className="pt-5 dmf-plateform">Invest in Invoice Discounting</p>
                <ul className= "pt-4">
                    <li>Upto 12% p.a.* Annualised Returns </li>
                    <li className="invoice-raised">Invoices raised on a curated set of large & trusted corporates</li>
                    <li>Full liquidity with Auto-reinvestment*</li>
                    <li>Short-term, Zero-default debt asset class</li>
                    <li>Minimum Investment of Rs 50K</li>
                </ul>

                <form className="login-form pt-4" onSubmit={this.handleSubmit}>
                   
                      <div className="form-group mt-3">
                        <label><strong>Email Address</strong></label> <br />
                        <input className="w-100 input-fields" 
                        name="email" 
                        autoComplete="on" 
                        id="email" 
                        type="email" value={this.state.email} 
                        onChange={event => this.setState({ email: event.target.value })}
                        required />
                      </div>  

                      <div className="form-group mt-3 pt-1">
                      <label><strong>Phone Number</strong></label> <br />
                        <input className="w-100 input-fields" 
                        name="phoneNo" autoComplete="on" 
                        id="phoneNo" 
                        type="number" value={this.state.phoneNo} 
                        onChange={event => this.setState({ phoneNo: event.target.value })}
                        required />
                      </div>
                            
                      <div className="cta-block form-group mt-4">
                          <button className="w-100 text-white btn btn-default" type="submit">Contact Us</button>
                      </div>
                                                    
                    </form>
            </div>
        </div>
              <div className='d-flex row flex-direction-row mt-5' style={{backgroundColor:'rgb(247, 248, 250)'}}>
                <div className=" mx-auto d-flex justify-content-center align-items-center row p-4 col-md-12">
                    <p className="invest-now-text"><strong> Invest Now & get upto 12% p.a.*</strong></p>
                    <p className="invoice-discounting-text pt-3">Invoice Discounting provides a unique opportunity of discounting invoices raised on big players in the consumer space. The vendors have to wait for 30-90 days to receive the money from the companies, so you can provide liquidity to vendors and earn an attractive yield.</p>
                    <p className="line mt-5" />
                    <a href={HowItWorks} className="how-it-works mt-2" target="blank"><strong>Click here to know, how it works?</strong></a>
                    <p className="line mt-4" />
                    <p className="invest-now-text pt-5"><strong>Invoices as an Asset Class</strong></p>
                </div>
                <div className=" asset-class mx-auto d-flex flex-column w-100 mx-6  justify-content-center align-items-center row p-4 col-md-12">
                  <div className="asset-class-text mx-6">
                    <div>
                    <strong className="heading">Credit Models</strong>
                    <p className="asset-class-text-content">
                    We use superior algo-driven credit models to curate invoices - Our credit models are much more superior & sharper than that of any other financial institution in India - And we are open to discussing with you about how they work.
                    </p>
                    </div>
                  </div>

                  <div className="asset-class-text mx-6">
                    <div>
                    <strong className="heading">Invoice Reports</strong>
                    <p className="asset-class-text-content">
                    We give you Invoice Reports to help you make that final decision. Don't like it? Don't transact. No problem.                    </p>
                    </div>
                  </div>

                  <div className="asset-class-text mx-6">
                    <div>
                    <strong className="heading">Track record</strong>
                    <p className="asset-class-text-content">
                    We have a zero delinquency record till date.</p>
                    </div>
                  </div>
                  <p className="t-and-c">* Terms and conditions apply</p>
                </div>
              </div>

              <Modal isOpen={this.state.modalOpen}
                toggle={()=>this.setState({modalOpen: !this.state.modalOpen})}
                className="success-bar">
                <ModalBody className="thanks-for-your-inte">
                <img src={success_checked} style={{width:'35px'}}/>&nbsp; &nbsp;Thank you for your interest. We will contact you soon.
                </ModalBody>
              </Modal>
              
        </div>
    );
 }
}

export default GetStarted;