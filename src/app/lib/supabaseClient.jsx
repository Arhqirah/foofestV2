import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gmioelkryyamonfgczfg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtaW9lbGtyeXlhbW9uZmdjemZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwMjEwMDgsImV4cCI6MjAzMTU5NzAwOH0.clBNlPojD3Ad9c428ie8jwMooavQYj1y1Dr5pNyW3L0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
