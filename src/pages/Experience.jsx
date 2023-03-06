import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School as SchoolIcon, Work as WorkIcon } from "@material-ui/icons";
import { List, ListItem } from "@material-ui/core";

const educationIconStyle = { background: "#3e497a", color: "#ffffff" };
const workIconStyle = { background: "#e9d35b", color: "#ffffff" };

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={workIconStyle}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer - Remitano
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ho Chi Minh, Vietnam
          </h4>
          <List>
            <ListItem>
              Reduced the users' waiting time of verification code by 50% (15
              seconds) by integrating 3 instant messaging apps (WhatsApp,
              Telegram, and Zalo) with Python and Ruby on Rails
            </ListItem>
            <ListItem>
              Upgraded a 6-year-old codebase to Rails 6, which enabled native
              support for multiple databases and resulted in a 1% reduction of
              legacy lines of code
            </ListItem>
            <ListItem>
              Developed a service that allows for cryptocurrency trading across
              multiple exchanges using arbitrage, resulting in a 10x increase in
              trading volume
            </ListItem>
          </List>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={workIconStyle}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Back End Developer - LOGIVAN
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ho Chi Minh, Vietnam
          </h4>
          <List>
            <ListItem>
              Simplified the order creation process by 1 step by developing a
              Ruby on Rails API to suggest truck type and truck load capacity
            </ListItem>
            <ListItem>
              Streamlined the quoting price process by designing a database
              structure using PostgreSQL, which stored over 30,000 pricing
              records
            </ListItem>
            <ListItem>
              Developed a Ruby on Rails API that suggests nearby truck drivers,
              resulting in an increase in the average number of in-progress
              orders per day by 3
            </ListItem>
          </List>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={workIconStyle}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer - TINYpulse
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ho Chi Minh, Vietnam
          </h4>
          <List>
            <ListItem>
              Reduced survey response time by 25% (1 minute) for over 10,000
              users through the integration of the Slack API
            </ListItem>
            <ListItem>
              Decreased the loading time of the user's survey response list by
              60% through refactoring of the legacy BackboneJS code
            </ListItem>
            <ListItem>
              Implemented an import tool for administrators that allows for the
              import of data from CSV files, resulting in a reduction of data
              entry time by 50% (5 minutes)
            </ListItem>
          </List>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2015"
          iconStyle={educationIconStyle}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ho Chi Minh City University of Technology, Vietnam
          </h4>
          <p>Electrical and Electronics Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
