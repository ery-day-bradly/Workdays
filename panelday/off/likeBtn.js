// You like it on Monday
// Set State onClick  
// For now it can be used as a const...
import { Monday } from '../monday/day';
import { Button } from 'react-native/Libraries/NewAppScreen';
import React, { useState } from 'react';



likeBtn() {
  console.log('like-button-root', Monday);
  // count variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You liked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Wednesday
      </Button>
    </div>
  );
}
