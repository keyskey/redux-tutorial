import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { drawerWidth } from './Sidebar';
import TaskInputContainer from './TaskInputContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabContainer: {
      paddingLeft: drawerWidth
    }
  })
);

export default function TabContainer() {
  const [value, setValue] = useState<number>(0);
  const classes = useStyles({});

  return (
    <div className={classes.tabContainer}>
      <AppBar position="static" color="default">
        {/*  value: アクティブなタブ , onChange: valueが変わったら呼ばれるcallback*/}
        <Tabs
          variant="standard"
          indicatorColor="primary"
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        >
          <Tab label="タスク入力" />
          <Tab label="アクティビティログ" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <TaskInputContainer />
      </TabPanel>

      <TabPanel value={value} index={1}>
        アクティビティログ(実装予定)
      </TabPanel>
    </div>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  return (
    <Typography component="div" hidden={props.value !== props.index}>
      {/* p: padding property. pだけなら全方向のpadding. https://material-ui.com/system/spacing/#api */}
      <Box p={3}>{props.children}</Box>
    </Typography>
  );
}
