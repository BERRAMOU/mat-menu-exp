import { NgFor, NgIf, NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import {
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
} from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { MatTooltip } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import { MainMenuLink } from "../../../models/menu.model";

@Component({
  selector: "main-menu",
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatMenuModule,
    MatDivider,
    MatMenuTrigger,
    MatMenuItem,
    MatIconButton,
    MatTooltip,
    MatSidenavModule,
    NgIf,
    NgFor,
    NgTemplateOutlet,
    RouterModule,
  ],
  templateUrl: "./main-menu.component.html",
  styleUrl: "./main-menu.component.scss",
})
export class MainMenuComponent {
  linksList: Array<MainMenuLink> = [
    {
      tooltip: "Notifications",
      icon: "notifications",
      subMenu: {
        id: "notificationsMenu",
        links: [
          {
            link: "/notifications",
            name: "Recent notifications",
            icon: "notifications",
          },
          {
            link: "/old-notifications",
            name: "Old notification",
            icon: "exit_to_app",
          },
        ],
      },
    },
    {
      tooltip: "My Account",
      icon: "account_circle",
      subMenu: {
        id: "userAccountMenu",
        links: [
          {
            link: "/my-account",
            name: "My Account",
            icon: "person",
          },
          {
            link: "/logout",
            name: "Logout",
            icon: "exit_to_app",
          },
        ],
      },
    },
  ];
}
