/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-05 14:21:43
 * @LastEditTime: 2022-01-05 16:15:15
 * @Description: Modify here please
 */

import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { Tinymce } from '/@/components/Tinymce';
import { formatToDateTime } from '/@/utils/dateUtil';
import { h } from 'vue';
export const columns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
    width: 160,
    align: 'left',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    width: 160,
    align: 'left',
    slots: { customRender: 'tags' },
  },
  {
    title: '内容要摘',
    dataIndex: 'content',
    width: 200,
    align: 'left',
    slots: { customRender: 'content' },
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 180,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

//  搜索form
export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    labelWidth: 50,
    colProps: { span: 6 },
  },
];

// 添加 form
export const formSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    required: true,
  },
  {
    field: 'tags',
    component: 'Select',
    label: '标签',
    colProps: {
      span: 8,
    },
    componentProps: {
      mode: 'multiple',
      options: [
        {
          label: '推荐',
          value: '推荐',
          key: '1',
        },
        {
          label: '新品',
          value: '新品',
          key: '2',
        },
      ],
    },
    rules: [
      {
        required: true,
        message: '请选择标签',
        type: 'array',
      },
    ],
  },
  {
    field: 'content',
    component: 'Input',
    label: '新闻内容',
    defaultValue: '新闻内容',
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Tinymce, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
        height: 800,
      });
    },
  },
];
