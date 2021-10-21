# Nodem-Tech-Code-Challenge
**Build a "like button" component using React 16. The component should be the default export (use export default).**


**Requirements:**
1. There should be a like button:
The content of the like button should be in the following format: "Like | 100", where 100 is the total number of likes.Build a "like button" component using React 16
It should have a "like-button" class.
Wrap the number of likes in a span with a "likes-counter" class.
The initial number of likes in the counter should be 100.
2. Users can add a like. By clicking the button:
The number of likes should increase by one.
Like button should have "liked" class in addition to the "like-button" class (you can use the classnames tool for that).
3. Users can undo their like by clicking again on the button:
The counter should decrease by one.
"liked" class should be removed.


**Assessment/Tools:**

Only two imports are allowed: react (v16.8.6) and classnames (v2.2.5). Both are at the top of the starting code.
Use the animation below as a reference for your solution.
Design/styling is not assessed and will not affect the score. You should focus only on implementing the requirements.
The "Preview" tab will display your component. You can use it for testing purposes.



https://user-images.githubusercontent.com/50902806/137901060-039fe700-7e1d-4de8-bd43-983c1399e99d.mp4


**Video Attachment**
The video above illustrates how the button should work. Make sure to look at it in order to provide desired results



**HERE IS THE STARTING CODE**


```
import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    render() {
        return (
            <>
                <div>
                    <h2>Like Button</h2>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}



```

Happing Coding
Nodem Technologies LTD
