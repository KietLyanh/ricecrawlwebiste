import React from 'react'
import './footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <footer>
      <div className="bottom_border">
        <div className="footer-center">
          <div style={{textAlign:'left', width:'50%'}}>
              <img src="./logo_header.png" className="footer img" />
              <h5>Find us</h5>
              <p>USTH, A21 Bulding, Vietnam Academy of Science and Technology</p>
              <p><IconButton color="primary"><LocationOnIcon /></IconButton> 18 Hoang Quoc Viet, Cau Giay District, Hanoi </p>
              <p><IconButton color="primary"><PhoneIcon /></IconButton> +84-24 37 91 69 60 </p>
              <p><IconButton color="primary"><MailIcon /></IconButton> officeusth@usth.edu.vn </p>
          </div>
        </div>
      </div>
      <div>
        <p style={{textAlign:'center'}} className='footer_copyright' >Copyright @2022 | Designed by USTH </p>
      </div>
    </footer>
  );
}

export default Footer