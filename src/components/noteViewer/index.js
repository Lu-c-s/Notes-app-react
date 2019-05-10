import React, { Component } from "react";
import styles from "./style.module.css";
import { Card } from "antd";

export default class noteViewer extends Component {
  render() {
    const note = this.props.note;
    console.log(this.props.note);
    return (
      <div className={styles.container}>
        {note ? (
          <Card title={note.title} style={{ width: "100%", height: "100%" }}>
            <p>{note.content}</p>
          </Card>
        ) : null}
      </div>
    );
  }
}
