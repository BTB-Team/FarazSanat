import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();
  return (
    <div className="page-container">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">جزئیات فنی پروژه</h1>
      <p className="text-base text-slate-600">در حال نمایش اطلاعات فنی مشخصات هنگر با آی‌دی: {id}</p>
    </div>
  );
}
