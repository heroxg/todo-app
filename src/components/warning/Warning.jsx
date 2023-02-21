import { useState } from 'react';
import Alert from '@mui/material/Alert';

const Warning = () => {
    const [showError, setShowError] = useState(false);
    
  return (
    <div>
        <Alert severity="warning" onClose={() => setShowError(false)}>
          Please enter a task — <strong>Cheers!</strong>
        </Alert>
    </div>
  )
}

export default Warning
