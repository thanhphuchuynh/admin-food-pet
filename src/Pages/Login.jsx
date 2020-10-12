import { Button, Container } from '@material-ui/core';
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { setCookies } from '../contains';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const Login = ()=>{
    const classes = useStyles();
    const [account,setAccount] = useState('');
    const [password,setPassword] = useState('');
    
    return(
        <div>
            <div style={{
                margin: "auto",
                width : 40

            }}>
                <h1 style={{
                    textTransform: "uppercase",
                    
                }}>Login</h1>
            </div>
            <Container maxWidth="sm">
            <form className={classes.root} noValidate autoComplete="off">
                <div style={{margin:"auto",width:'100%'}}>
                        <TextField
                            style={{margin:"auto",width:'100%',marginTop:10}}
                            onChange={(text)=>setAccount(text.target.value)}
                            id="standard-password-input"
                            label="Account"
                            type="text"
                            autoComplete="current-password"
                        />
                        <TextField
                            style={{margin:"auto",width:'100%',marginTop:10}}
                            onChange={(text)=>setPassword(text.target.value)}
                            id="standard-account-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button
                            style={{margin:"auto",width:"100%",marginTop:50}}
                            onClick={()=>{
                                console.log(account,password);
                                if(account==='admin' && password==='admin'){
                                    setCookies('userID',"admin");
                                    window.location.reload(false);
                                }
                            }}
                            variant="contained" color="primary">
                            Login
                        </Button>
                   
                </div>
            </form>
            
            </Container>
        </div>
    )
}

export default Login;