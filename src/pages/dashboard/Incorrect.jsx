//MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Components Imports

const Incorrect = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Incorrect</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            0
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Incorrect
