import { Card, Grid } from "@material-ui/core";
import { Button } from "@mui/material";
import React from "react";
import "./profile.css";
import { useHistory } from "react-router-dom";

function Profile() {
  let history = useHistory();
  return (
    <div className="Pofile__Body">
      <Card sx={{ width: "100%" }} style={{ height: "100%" }}>
        <div style={{ padding: 10 }}>
          <h3 className="Profile__CaseID">Case ID: A002701</h3>
        </div>

        <div style={{ padding: 20, fontSize: "12px", lineHeight: 2 }}>
          <Grid container spacing={2} className="Claiment">
            <Grid item xs={4} className="details">
              <div>
                <span style={{ lineHeight: 15 }}>Claimant:</span>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div>
                <div>Name: Bombay (Blokes) via Prashant1 Bhundere</div>&nbsp;
                <div>Email: developerrwork456@gmail.com</div>&nbsp;
                <div>Phone: 8380009384</div>&nbsp;
                <div>
                  Address: Shree g chamber 640606966 Mumbai-421503.
                  Maharashatra, India
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="Respondent">
            <Grid item xs={4} className="Profile__respondent">
              <div>
                <span>Respondent:</span>
              </div>
            </Grid>
            <Grid item xs={8} className="Profile__respondent">
              <div> Not available</div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="Respondent">
            <Grid item xs={4} className="Profile__respondent">
              <div>
                <span>Authorized Representative of Respondent:</span>
              </div>
            </Grid>
            <Grid item xs={8} className="Profile__respondent">
              <div>This is empty</div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="Respondent">
            <Grid item xs={4} className="Profile__respondent">
              <div>
                <span>Nature of Agreement:</span>
              </div>
            </Grid>
            <Grid item xs={8} className="Profile__respondent">
              <div>hfgh</div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="Respondent">
            <Grid item xs={4} className="Profile__respondent">
              <div>
                <span>Agreement Date:</span>
              </div>
            </Grid>
            <Grid item xs={8} className="Profile__respondent">
              <div>05/02/2022</div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="Respondent">
            <Grid item xs={4} className="Profile__respondent">
              <div>
                <span>Agreement:</span>
              </div>
            </Grid>
            <Grid item xs={8} className="Profile__respondent">
              <div>
                <Button className="Profile__DownlodBtn" variant="contained">
                  Download
                </Button>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="Respondent">
            <Grid item xs={4} className="Profile__respondent">
              <div>
                <span>Arbitration Clause No:</span>
              </div>
            </Grid>
            <Grid item xs={8} className="Profile__respondent">
              <div>vx</div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="Respondent">
            <Grid item xs={4} className="Profile__respondent">
              <div>
                <span>Claimant Reference No:</span>
              </div>
            </Grid>
            <Grid item xs={8} className="Profile__respondent">
              <div>7676575</div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="Respondent">
            <Grid item xs={4} className="Profile__respondent">
              <div>
                <span>
                  Brief description of the Claim and indication of the amount
                  involved:
                </span>
              </div>
            </Grid>
            <Grid item xs={8} className="Profile__respondent">
              <div>fhgf</div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="Respondent">
            <Grid item xs={4} className="Profile__respondent">
              <div>
                <span>Request Letter:</span>
              </div>
            </Grid>
            <Grid item xs={8} className="Profile__respondent">
              <div>
                <Button variant="contained" className="Profile__DownlodBtn">
                  Download
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="Profile_backBtn">
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              history.push("/dashboard");
            }}
          >
            Back
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Profile;
