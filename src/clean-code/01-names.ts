(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, isToDelete:  false },
        { id: 2, isToDelete:  false },
        { id: 3, isToDelete:  true },
        { id: 4, isToDelete:  false },
        { id: 5, isToDelete:  false },
        { id: 7, isToDelete:  true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = filesToEvaluate.map( f => f.isToDelete );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const enlapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const filesOnDir = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const lastUpdate = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const studentMaxClasses = 6;


})();
