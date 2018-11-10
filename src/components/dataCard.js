import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


function Transition(props) {
        return <Slide direction="up" {...props} />;
}


export default class DataCard extends Component {

        state = {
                open: false,
        };

        handleClickOpen = () => {
                this.setState({ open: true });
        };

        handleClose = () => {
                this.setState({ open: false });
        };

        render() {
                var cardStyle = {
                        //         display: 'block',
                                // width: '25vw',
                        //         transitionDuration: '0.3s',
                        textAlign: 'center',
                        height: '48vh'
                }
                return (
                        <div>
                        <Card className='root' style={cardStyle}>
                                
                                <CardContent>
                                <Typography variant="h5" component="h2">

                                {this.props.starter.title} 
                                </Typography><br/>
          
                                <Typography className= 'root' color="textSecondary" gutterBottom>
                                        <strong>By:</strong>{this.props.starter.by}<br/>
                                                <strong>Country:</strong>{this.props.starter.country}<br/>
                                                <strong>Location:</strong>{this.props.starter.location}<br/>
                                                <strong>State:</strong>{this.props.starter.state}<br/>
                                                
                                               <strong>Type:</strong>{this.props.starter.type}
                                               </Typography>
                                                
                                </CardContent>
                                <CardActions>
                                        <Button size="small" color='primary'
                                                onClick={this.handleClickOpen}>View Details</Button>
                                </CardActions>
                                </Card>
                                <Dialog
                                        open={this.state.open}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={this.handleClose}
                                        aria-labelledby="alert-dialog-slide-title"
                                        aria-describedby="alert-dialog-slide-description"
                                >
                                        <DialogTitle id="alert-dialog-slide-title">
                                                {this.props.starter.title}
                                        </DialogTitle>
                                        <DialogContent>
                                                <DialogContentText id="alert-dialog-slide-description" color='textPrimary'>

                                                
                                                <strong>Funded:</strong>{this.props.starter['percentage.funded']}
                                                <br/>
                                                
                                                <strong>Backers:</strong>{this.props.starter['num.backers']}
                                                <br/>
                                                
                                                <strong>Currency:</strong>{this.props.starter.currency}
                                                <br/>
                                                
                                                <strong>Pledged:</strong>{this.props.starter['amt.pledged']}
                                                <br/>
                                                
                                                <strong>Blurb:</strong>{this.props.starter['blurb']}
                                                

                                                </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                                <Button onClick={this.handleClose} color="primary">
                                                        Close
                                                 </Button>
                                        </DialogActions>
                                </Dialog>
                                </div>
                        
                );

        }
}
