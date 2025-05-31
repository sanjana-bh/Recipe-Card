document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const toggleIngredientsBtn = document.getElementById('toggleIngredients');
    const ingredientsList = document.getElementById('ingredientsList');
    const startCookingBtn = document.getElementById('startCooking');
    const nextStepBtn = document.getElementById('nextStep');
    const steps = document.querySelectorAll('.step');
    const progressBar = document.getElementById('progressBar');
    
    let currentStep = 0;
    
    // Toggle Ingredients Visibility
    toggleIngredientsBtn.addEventListener('click', function() {
        ingredientsList.classList.toggle('hidden');
        
        if (ingredientsList.classList.contains('hidden')) {
            toggleIngredientsBtn.textContent = 'Show';
        } else {
            toggleIngredientsBtn.textContent = 'Hide';
        }
    });
    
    // Start Cooking Functionality
    startCookingBtn.addEventListener('click', function() {
        // Hide the start button
        startCookingBtn.classList.add('hidden');
        
        // Show the next step button
        nextStepBtn.classList.remove('hidden');
        
        // Highlight the first step
        steps[currentStep].classList.add('active');
        
        // Update progress bar
        updateProgressBar();
    });
    
    // Next Step Functionality
    nextStepBtn.addEventListener('click', function() {
        // Remove active class from current step
        steps[currentStep].classList.remove('active');
        
        // Move to next step
        currentStep++;
        
        // If we've completed all steps
        if (currentStep >= steps.length) {
            nextStepBtn.textContent = 'Finished!';
            nextStepBtn.disabled = true;
            return;
        }
        
        // Highlight the next step
        steps[currentStep].classList.add('active');
        
        // Update progress bar
        updateProgressBar();
    });
    
    // Update Progress Bar
    function updateProgressBar() {
        const progress = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // Optional: Add print functionality
    // You can add a print button in HTML and use this:
    // document.getElementById('printBtn').addEventListener('click', function() {
    //     window.print();
    // });
});