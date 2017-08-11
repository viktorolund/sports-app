import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="navbar navbar-fixed-bottom">
        <div className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="hidden-xs hidden-sm">
                  <div className="row">
                    <div className="col-xs-3">
                      <span className="lead">Kontakt</span>
                    </div>
                    <div className="col-xs-3">
                      <span className="lead">Utbildning</span>
                    </div>
                    <div className="col-xs-3">
                      <span className="lead">
                        Repositories{" "}
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3">
                      <span>
                        <i
                          className="fa fa-envelope-o fa-lg"
                          aria-hidden="true"
                        />
                      </span>
                      <span> viktorolund@gmail.com</span>
                    </div>
                    <div className="col-xs-3">
                      <a href="https://www.umu.se/utbildning/program/hogskoleingenjorsprogrammet-i-elektronik-och-datorteknik-medicinsk-teknik">
                        Högskoleingenjörsprogrammet i Elektronik och Datorteknik
                      </a>
                    </div>
                    <div className="col-xs-3">
                      <a href="https://github.com/viktorolund/CV">CV</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <span>
                        <i
                          className="fa fa-phone-square fa-lg"
                          aria-hidden="true"
                        />
                      </span>
                      <span> 076 8240713</span>
                    </div>
                  </div>
                  <div className="row field-margin">
                    <div className="col-xs-10">
                      <small className="text-muted">
                        Site design / logo © 2017 Viktor Ölund
                      </small>
                    </div>
                  </div>
                </div>
                <div className="hidden-lg hidden-md">
                  <div className="row">
                    <div className="col-xs-6">
                      <span className="lead">Kontakt</span>
                    </div>
                    <div className="col-xs-6">
                      <span className="lead">Utbildning</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <span>
                        <i
                          className="fa fa-envelope-o fa-lg"
                          aria-hidden="true"
                        />
                      </span>
                      <span> viktorolund@gmail.com</span>
                    </div>
                    <div className="col-xs-6">
                      <a href="https://www.umu.se/utbildning/program/hogskoleingenjorsprogrammet-i-elektronik-och-datorteknik-medicinsk-teknik">
                        Högskoleingenjörsprogrammet i Elektronik och Datorteknik
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <span>
                        <i
                          className="fa fa-phone-square fa-lg"
                          aria-hidden="true"
                        />
                      </span>
                      <span> 076 8240713</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-xs-offset-6">
                      <span className="lead">
                        Repositories{" "}
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-xs-offset-6">
                      <a href="https://github.com/viktorolund/CV">CV</a>
                    </div>
                  </div>
                  <div className="row field-margin">
                    <div className="col-xs-10">
                      <small className="text-muted">
                        Site design / logo © 2017 Viktor Ölund
                      </small>
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
};

export default Footer;
