import React from 'react';

const Header = () => {
  return (
    <div>
        <div className="panel-group">
            <div className="panel panel-default">
                <div className="panel-heading collapsable" data-toggle="collapse" href="#headofsportsapp">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" className="accordion-toggle" tabIndex="-1" data-target="#headofsportsapp" href="#headofsportsapp">Sports App</a>
                    </h4>
                </div>
                <div id="headofsportsapp" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <strong>Sports app <i className="fa fa-check-circle fa-lg fa-icon-success" aria-hidden="true"></i></strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <span className="lead">is awesomes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
