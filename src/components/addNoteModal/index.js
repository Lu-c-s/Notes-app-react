import React, { Component, useState } from "react";
import { Modal, Button, Input, Form , Icon } from "antd";

class AddNoteForm extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });

  };

  handleOk = e => {
    console.log(e);
    this.handleSubmit(e);
    this.props.onCancelModal();
  };

  handleCancel = e => {
    console.log(e);
    this.props.onCancelModal();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.addNote({
            ...values
        })
      }
    });
  }

  render() {
      const { getFieldDecorator } = this.props.form;
      console.log(this.props)
    return (
      <Modal
        title="New note"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
         <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
            {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input a title!' }],
            })(
                <Input prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Title" />
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('subtitle', {
                rules: [{ required: false, message: 'Please input a subtitle!' }],
            })(
                <Input prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Subtitle" />
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('content', {
                rules: [{ required: true, message: 'Please enter a message!' }],
            })(
                <Input.TextArea 
                    prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Message"
                    
                 />
            )}
            </Form.Item>            
        </Form>
      </Modal>
    );
  }
}

const WrappedAddNoteForm = Form.create({ name: 'add_note' })(AddNoteForm)

export default WrappedAddNoteForm
