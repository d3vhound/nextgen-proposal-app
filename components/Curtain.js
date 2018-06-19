export default (props) => (
  <div className="curtain">
    <div className="curtain__wrapper">
      <div className="curtain__panel--full">
        {props.children}
      </div>
    </div>
  </div>
)