import React from 'react';
import { Grid, Typography, Button, Card, CardContent, Divider } from '@mui/material';
import QRCode from 'qrcode.react'; // Assuming you have qrcode.react installed

const dataPlans = [
  { id: 1, dataAmount: '3GB', randomTime: '10 days', scope: 'Country Name 1' },
  { id: 2, dataAmount: '4GB', randomTime: '20 days', scope: 'Country Name 2' },
  { id: 3, dataAmount: '5GB', randomTime: '30 days', scope: 'Country Name 3' },
  { id: 4, dataAmount: '6GB', randomTime: '40 days', scope: 'Country Name 4' },
  { id: 5, dataAmount: '7GB', randomTime: '50 days', scope: 'Country Name 5' },
];

function EsimDataPlans() {
  const generateRandomQRCode = () => {
    const text = 'Your QR code text'; // Replace with your QR code content
    return <QRCode value={text} size={150} />;
  };

  return (
    <div className="p-5" style={{ backgroundColor: '#f5f5f5' }}>
    {/* Header row */}
    <Divider sx={{ borderColor: 'white', borderWidth: '2px' }} />
    <br />
    <div className="flex items-center justify-between mb-4">
      <Typography variant="h5">eSim Data Plans</Typography>
      <Button variant="outlined" color="primary">Refresh</Button>
    </div>

    {/* Cards section */}
    <Grid container spacing={3}>
      {dataPlans.map(plan => (
        <Grid item xs={12} sm={6} md={2.4} key={plan.id}>
          <Card variant="outlined" sx={{ borderRadius: 10 }}>
            <CardContent>
              <Typography variant="body1" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', px: 2, py: 1, borderRadius: 2 }}>
                {plan.dataAmount}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={2}>
                Duration: {plan.randomTime}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2">
                Scope: {plan.scope}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
                <Button variant="contained" color="primary">
                  Get QR Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <br />
    <br />
    <Divider sx={{ borderColor: 'grey', borderWidth: '3px' }} />

    {/* Centered Card */}
    <Card className="centered-card" sx={{ bgcolor: 'white', maxWidth: 300,maxHeight: 370, mx: 'auto', mt: 4, borderRadius: 10 }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant="contained" sx={{ bgcolor: '#87CEFA', color: '#1E90FF', fontWeight: 'bold', mr: 2 }}>
            #5204
          </Button>
          <Button variant="contained" sx={{ bgcolor: '#87CEFA', color: '#1E90FF', fontWeight: 'bold', ml: 2 }}>
            3GB
          </Button>
        </div>s
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <QRCode value={'Your QR code text'} size={150} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button variant="contained" style={{ bgcolor: '#87CEFA', color: '#1E90FF', fontWeight: 'bold' }}>
            Incorrect
          </Button>
          <Button variant="contained" color="primary">
            Sold
          </Button>
          <Button variant="contained" color="primary">
            Sold
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
  );
}

export default EsimDataPlans;
