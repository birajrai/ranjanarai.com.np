#!/bin/bash

# Color mappings:
# primary: #6F4E37
# secondary: #F5F5DC
# accent: #C19A6B
# darkGray: #3E2723
# cream: #FFF8E1

# Find all TSX files and replace color names with hex codes
find components app -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '
s/text-primary/text-[#6F4E37]/g
s/bg-primary/bg-[#6F4E37]/g
s/border-primary/border-[#6F4E37]/g
s/text-secondary/text-[#F5F5DC]/g
s/bg-secondary/bg-[#F5F5DC]/g
s/border-secondary/border-[#F5F5DC]/g
s/text-accent/text-[#C19A6B]/g
s/bg-accent/bg-[#C19A6B]/g
s/border-accent/border-[#C19A6B]/g
s/text-darkGray/text-[#3E2723]/g
s/bg-darkGray/bg-[#3E2723]/g
s/border-darkGray/border-[#3E2723]/g
s/text-cream/text-[#FFF8E1]/g
s/bg-cream/bg-[#FFF8E1]/g
s/border-cream/border-[#FFF8E1]/g
' {} \;

echo "Color replacement complete!"
