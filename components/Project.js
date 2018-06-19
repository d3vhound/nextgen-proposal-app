export default (props) => (
 <div className="portfolio">
  <div className="content">
    <div className="block-content mb-100">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <h1 className="mb-20">Project Details</h1>
            <h5 className="uppercase">REQUIREMENTS & SPECIFICATIONS</h5>
          </div>
        </div>
        <div className="block-posts">
          <div className="block-post mb-100">
            <div className="post-title mb-40" style={{paddingTop: '100px'}}>
            {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="block-content">
      <div className="row">
        <div className="col-md-12">
          <span className="page-number emph-1">- 3/5 -</span>
        </div>
        <p className="lead-intro">This document is not to be distributed to anyone outside of your organization.</p>
      </div>
    </div> 
  </div>
 </div>
)