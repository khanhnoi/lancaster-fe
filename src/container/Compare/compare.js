import React, { useEffect, useState } from "react";
import CompareItem from "./CompareItem";
import CompareRight from "./CompareRight";

const Compare = (props) => {
  const {} = props;
  const [step, setStep] = useState(1);

  useEffect(() => {
    changeStep(step);
  }, [step]);

  const changeStep = (step) => {
    [1, 2, 3].map((item) => {
      if (step === item) {
        document.getElementById(`step${step}`).style.display = "block";
      } else {
        document.getElementById(`step${item}`).style.display = "none";
      }
    });
  };

  return (
    <>
      <section className="left-choose" id="step1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 left-choose-list">
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
            </div>
            <CompareRight text={true} step={1} setStep={setStep} />
          </div>
        </div>
      </section>
      <section className="left-choose" id="step2">
        <div className="container-fluid">
          <div className="row">
            <CompareRight step={step} setStep={setStep} />
            <div className="col-md-6 left-choose-list">
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
              <CompareItem col={true} setStep={setStep} step={step} />
            </div>
          </div>
        </div>
      </section>

      <section className="left-choose" id="step3">
        <div className="container-fluid">
          <div className="row">
            <CompareRight step={step} setStep={setStep} />
            <CompareRight step={step} setStep={setStep} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Compare;
