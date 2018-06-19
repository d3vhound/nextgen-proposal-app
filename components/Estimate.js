export default (props) => (
  <div className="blog">
    <div className="content">
      <div className="block-content mb-100">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title">
              <h1 className="mb-20">Estimate</h1>
              <h5 className="uppercase">ESTIMATE ONLY</h5>
            </div>
            <p class="lead-intro mt-40 ng-lead-intro-fix">This document is an estimate only and does not represent a binding agreement between the Client and NextGen Code Company. A contract will be provided upon acceptance of this estimate.</p>
          </div>
        </div>
      </div>
      <div className="block-content mb-100">
        <div className="row">
          <div className="col-md-12">
            <div className="project-content">
              {props.children}  
            </div>
            {/* <div className="block-posts">
              <div class="block-post mb-100 mt-100">
                <div class="entry-content">
                  <h5 class="uppercase">Rush Fee</h5>
                  <p>Deliverables requested for a 7-day turnaround will be subject to a rush fee of 2x the estimated cost.</p>
                </div>
                <div class="entry-content">
                  <h5 class="uppercase">Additional Cost Allowances</h5>
                  <p>Additional services or alterations outside the scope of the contract will be quoted as needed. NextGen may also provide estimates for the following additional services if they are required for completion of the project as soon as the needed services surface in nature.</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="block-content">
        <div className="row">
          <div className="col-md-12">
            <span className="page-number emph-1">- 4/5 -</span>
          </div>
          <p className="lead-intro">This document is not to be distributed to anyone outside of your organization.</p>
        </div>
      </div>
    </div>
  </div>
)