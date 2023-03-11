import toast from 'react-hot-toast';

export const filterSearchOptions = (items, value) => {
  return items
    .filter((item) => {
      const searchTerm = value?.toLowerCase();
      const fullName = item?.snippet?.title?.toLowerCase();
      return (
        searchTerm &&
        fullName?.startsWith(searchTerm) &&
        fullName !== searchTerm
      );
    })
    .slice(0, 10);
};

export const showToast = (message) => {
  toast.remove();
  message &&
    toast(message, {
      style: {
        background: '#333',
        color: '#fff',
      },
    });
};

export const getUrl = (id) => {
  return `https://www.youtube.com/embed/${id}`
};
