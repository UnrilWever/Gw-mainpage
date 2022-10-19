import { PlusSquareOutlined } from '@ant-design/icons';
import { Popover, Tooltip } from 'antd';
import React, { useCallback } from 'react';

// import { emojis } from './emojis';
const magConfig = ['30%', '60%', '90%'];

const imgTag = (url = null, size) => {
  return `<img src="${url.trim()}" style="width:${size}"></img>`;
};

export const Magimg = ({ editor, monaco }) => {
  const insert = useCallback(
    (size) => {
      const s = editor.getSelection();
      //获取选中文本
      const selectText = editor.getModel().getValueInRange(editor.getSelection());
      const RangeObj = new monaco.Range(s.startLineNumber, s.startColumn, s.endLineNumber, s.endColumn);

      editor.executeEdits('', [
        {
          range: RangeObj,
          text: imgTag(selectText, size),
        },
      ]);
    },
    [editor, monaco]
  );

  return (
    <Popover
      content={
        <ul>
          {magConfig.map((size, index) => {
            return (
              <li style={{ cursor: 'pointer' }} key={index} onClick={() => insert(size)}>
                {size}
              </li>
            );
          })}
        </ul>
      }
    >
      <Tooltip title={'放大图片'}>
        <PlusSquareOutlined />
      </Tooltip>
    </Popover>
  );
};
