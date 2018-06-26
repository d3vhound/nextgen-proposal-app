import "../static/styles.scss"
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Project from '../components/Project'
import About from '../components/About'
import Estimate from '../components/Estimate'
import Contact from '../components/Contact'
import { createClient } from 'contentful'
import classNames from 'classnames'
import { NavItem, Row, Tabs, Tab, TabContainer, TabContent, TabPane, Nav} from 'react-bootstrap'
import * as Markdown from 'react-markdown'


const SPACE = process.env.CONTENTFUL_SPACE
const TOKEN = '39a4b978d6024545dda63761d1074ea02fbc2017e263ba819403d72f620f6930'


const client = createClient({
  space: SPACE,
  accessToken: TOKEN
})

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      render: '',
      error: false,
      curtainHidden: false,
      data: ''
    }

  }

  static async getInitialProps(context) {
    const entries = await client.getEntries({
      content_type: 'project',
      include: 3
    })

    return { entries }
  }

  componentDidMount() {
    console.log(this.props.entries)
    let driftbot_function = function() {
      !function() {
        var t;
        if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
        t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
        t.factory = function(e) {
          return function() {
            var n;
            return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
          };
        }, t.methods.forEach(function(e) {
          t[e] = t.factory(e);
        }), t.load = function(t) {
          var e, n, o, i;
          e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
          o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js",
          n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
        });
      }();

      drift.SNIPPET_VERSION = '0.3.1';
      drift.load('5descdcc8vrz');
      drift.page();
    }

    driftbot_function();
  }

  render() {
    const errorStyle = this.state.error ? { display: 'block' } : {display: 'none'}

    let curtainStyle = classNames({
      'curtain__panel--full': true,
      'curtain-hidden': this.state.curtainHidden
    })

    const getEntry = (id) => {
      client.getEntries({
        content_type: 'project',
        'fields.projectCode[all]': `${id}`
      })
      .then((response) => {
        if (response.items.length === 0 ) {
          displayError()
        } 
        else {
          hideError()
          showData(response.items)
          this.setState({
            data: response.items[0]
          })
        }

        console.log(response.items[0])
      })
      .catch(console.error)
    }

    const displayError = () => {
      console.log('Error')
      this.setState({
        error: true,
        data: null
      })
    }

    const hideError = () => {
      console.log('Hiding error')
      this.setState({
        error: false
      })
    }

    const showData = (data) => {
      console.log('Showing data', data )
      this.setState({
        curtainHidden: true
      })
    }

    const handleSelect = () => {
      console.log('selected')
    }

    const item = this.state.data
    return (
      <Layout>
        <div className="curtain">
        <div className="curtain__wrapper">
        <div className={curtainStyle}>
          
          <img className="login-image" src="https://res.cloudinary.com/devhound/image/upload/v1529238269/tango_proposal_f7hdb8.png" />
          
          <h1>Enter your proposal passcode</h1>
          <h1 style={errorStyle}>Error: Please enter your code again</h1>

          <form id="formID" style={{zIndex: '1000'}}> 
            <input
              type="text"
              id="code"
              label="Passcode"
              placeholder="Passcode"
              className="form-control"
              />

            <input className="btn" type="submit" onClick={(e) => {
              e.preventDefault()
              const form = document.getElementById('formID')
              getEntry(form.code.value)
              console.log('submitted', form.code.value)
            }}/>
          </form>
        </div>
        </div>
        </div>




        {item ? (
          <div id="wrapper" className="mt-150 mb-150">
          <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="contents">
          <Row className="clearfix">
          <div className="col-md-2 left-content pd-r0">
          <header id="header">
            <div className="main-header">
              <div className="img-profile">
                <img src={item.fields.clientLogo.fields.file.url} />
                <div className="name-profile t-center">
                  <h5 className="uppercase">{item.fields.projectTitle}</h5>
                </div>
              </div>
              <nav id="main-nav" className="main-nav clearfix t-center uppercase tabbed">
              <Nav className="clearfix">

              <NavItem eventKey="contents" className="">
                <i className="icon-info"></i>
                  General
                <span></span>
              </NavItem>

              <NavItem eventKey="about" className="">
                <i className="icon-users"></i>
                  About us
                <span></span>
              </NavItem>

              <NavItem eventKey="project" className="">
                <i className="icon-briefcase"></i>
                  Project Details
                <span></span>
              </NavItem>

              <NavItem eventKey="estimate" className="">
                <i className="icon-doc-8"></i>
                  Estimate
                <span></span>
              </NavItem>

              <NavItem eventKey="contact" className="">
                <i className="icon-phone"></i>
                  Contact
                <span></span>
              </NavItem>

						</Nav>
            </nav>
            </div>
          </header>
          </div>



          <Tab.Content className="col-md-9 right-content pd-r0 pd-l0" animation>

            <Tab.Pane className="bg-white t-center" eventKey="contents">
              <div className="about">
                <div className="content">
                <div className="block-content mb-100">
                  <div className="ng-title-picture-container">
                    <div className="ng-title-picture-inner">
                      <img src="https://res.cloudinary.com/devhound/image/upload/v1529230660/nextgen_header_logo-01_frfjq7.png" />
                    </div>
                  </div>
                </div>

                <div className="block-content mb-100 pb-30">
                  <div className="row">
                  <div className="col-md-8 col-md-offset-3 col-sm-8 col-sm-offset-3">
                  <div class="listing mt-40">
                  <div class="listing-inner">
										<div class="listing-event">
											<ul class="data left">
												<li class="emph-1">Creation Date</li>
												<li class="emph-1">&nbsp;</li>
												<li class="emph-1">Expiration Date</li>
												<li class="emph-1"> &nbsp;</li>
												<li class="emph-1">Prepared By</li>
												<li class="emph-1"> &nbsp;</li>
												<li class="emph-1">Prepared For</li>

											</ul>
                      <ul class="data right">
												<li>{item.fields.creationDate}</li>
												<li> &nbsp;</li>
												<li>{item.fields.expirationDate}</li>
												<li> &nbsp;</li>
												<li>{item.fields.preparedBy}</li>
												<li> &nbsp;</li>
												<li><span>{item.fields.preparedFor.map((item, index) => {
                          return (
                            <p>{item}</p>
                          )
                        })}
                        </span></li>

											</ul>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                </div>

                <div className="block-content">
                  <div className="row">
                    <div class="col-md-12">
                      <span class="page-number emph-1">- 1/5 -</span>
                    </div>
                    <p class="lead-intro">This document is not to be distributed to anyone outside of your organization.</p>
                  </div>
                </div>

                </div>
              </div>
            </Tab.Pane>

            <Tab.Pane className="bg-white t-center" eventKey="about">
              <About />
            </Tab.Pane>

            <Tab.Pane className="bg-white t-center" eventKey="project">
              <Project>
                <Markdown className="project-content" source={item.fields.phaseContent} />
              </Project>
            </Tab.Pane>

            <Tab.Pane className="bg-white t-center" eventKey="estimate">
              <Estimate>
                <Markdown className="project-content" source={item.fields.estimateContent} />
              </Estimate>
            </Tab.Pane>

            <Tab.Pane className="bg-white t-center" eventKey="contact">
              <Contact />
            </Tab.Pane>

          </Tab.Content>

            </Row>
          </Tab.Container>
          </div>
          </div>
        ) : null}
            

      </Layout>
    )
  }
}

export default Index
