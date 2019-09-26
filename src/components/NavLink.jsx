import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


const routeLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

export default function NavLink(props) {
  return (
        <Link component={routeLink} {...props} >
          {/* {props.children} */}
        </Link>        
  );
}