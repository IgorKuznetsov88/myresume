import React, { Component } from "react";

const IconsContact = [
  {
    link: (
      <a className="my-email" href="mailto:igorkuznetsov@me.com">
        
        <i class="fas fa-envelope-square" />

      </a>
    )
  },

  {
    link: (
      <a className="vk" href="https://vk.com/id4833549" target = "_blank" rel="noopener noreferrer">

        <i class="fab fa-vk" />

      </a>
    )
  },

  {
    link: (
      <a className="git-hub" href="https://github.com/IgorKuznetsov88" target = "_blank" rel="noopener noreferrer">

        <i class="fab fa-github-square" />

      </a>
    )
  }
];

class Icons extends Component {
  render() {
    return IconsContact.map(IconsContact => (
      <div className="Icons">

        <span>{IconsContact.link}</span>

      </div>
    ));
  }
}

export default Icons;
