import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showError = (title: string, text: string) => {
  MySwal.fire({
    icon: 'error',
    title: `<p>${title}</p>`,
    text,
    confirmButtonColor: '#2F4156',
  });
};

export const showSuccess = (title: string, text: string) => {
  MySwal.fire({
    icon: 'success',
    title: `<p>${title}</p>`,
    text,
    confirmButtonColor: '#567C8D',
  });
};

export const showConfirm = (title: string, text: string, callback: () => void) => {
  MySwal.fire({
    title: `<p>${title}</p>`,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2F4156',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, ¡hazlo!',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};