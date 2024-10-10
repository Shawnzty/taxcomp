export const translations = {
    en: {
      title: 'Tax Calculator',
      description: 'Simple tax calculator app',
      footer: 'Tax Calculator App',
      annualSalary: 'Annual Salary',
      monthlySalary: 'Monthly Salary',
      bonus: 'Bonus',
      calculate: 'Calculate',
      reset: 'Reset',
      result: 'Estimated Tax:',
    },
    ja: {
      title: '税金計算機',
      description: 'シンプルな税金計算アプリ',
      footer: '税金計算アプリ',
      annualSalary: '年収',
      monthlySalary: '月給',
      bonus: 'ボーナス',
      calculate: '計算する',
      reset: 'リセット',
      result: '推定税額：',
    },
    zh: {
      title: '税务计算器',
      description: '简单的税务计算应用',
      footer: '税务计算器应用',
      annualSalary: '年薪',
      monthlySalary: '月薪',
      bonus: '奖金',
      calculate: '计算',
      reset: '重置',
      result: '预估税额：',
    },
  };
  
  export type Language = keyof typeof translations;
  export type TranslationKey = keyof typeof translations.en;