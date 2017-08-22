import React from "react";

class Knowledge extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div
                  className="panel-heading collapsable"
                  data-parent="#accordion"
                  data-toggle="collapse"
                  data-target="#webb"
                >
                  <h4 className="panel-title">
                    <a className="accordion-toggle">
                      Webb{" "}
                      <i className="fa fa-chrome fa-lg" aria-hidden="true" />
                    </a>
                  </h4>
                </div>
                <div id="webb" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>Javascript</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-10 col-xs-offset-1">
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>Node.js</strong>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>AngularJS</strong>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>jQuery</strong>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>JSON</strong>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>Highcharts</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>XML</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>PHP</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>C#</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>html</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>CSS</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-10 col-xs-offset-1">
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>Bootstrap</strong>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>Font Awesome</strong>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>Less</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div
                  className="panel-heading collapsable"
                  data-parent="#accordion"
                  data-toggle="collapse"
                  data-target="#testing"
                >
                  <h4 className="panel-title">
                    <a className="accordion-toggle collapsed">
                      Testing{" "}
                      <i
                        className="fa fa-check-circle fa-lg fa-icon-success"
                        aria-hidden="true"
                      />
                    </a>
                  </h4>
                </div>
                <div id="testing" className="panel-collapse collapse">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>Javascript</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-10 col-xs-offset-1">
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>Jest Unit Testing</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>AngularJS</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-10 col-xs-offset-1">
                            <div className="row">
                              <div className="col-xs-12">
                                <strong>Protractor end-to-end Testing</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div
                  className="panel-heading collapsable"
                  data-parent="#accordion"
                  data-toggle="collapse"
                  data-target="#proglang"
                >
                  <h4 className="panel-title">
                    <a className="accordion-toggle collapsed">
                      Programspråk och databaser{" "}
                      <i className="fa fa-terminal fa-lg" aria-hidden="true" />
                    </a>
                  </h4>
                </div>
                <div id="proglang" className="panel-collapse collapse">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>Java</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>Python</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>C</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <strong>MySQL</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Knowledge;
