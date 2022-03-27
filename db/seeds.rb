# Appointment.delete_all
# User.delete_all
# Doctor.delete_all

10.times do
  doctor = Doctor.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::Superhero.name,
    specialty: Faker::Job.field,
    bio: Faker::Lorem.sentence(word_count: 3, supplemental: false, random_words_to_add: 4)
  )

  5.times do
    user = User.create(
      first_name: Faker::FunnyName.name,
      last_name: Faker::Superhero.name,
      phone: Faker::PhoneNumber.cell_phone,
      note: Faker::Lorem.sentence(word_count: 3, supplemental: false, random_words_to_add: 4)
    )

    # Appointment.create(
    #   appointment: appointment.sample,
    #   doctor_id: doctor.id,
    #   user_id: user.id
    #   # date_id: date.id
      
    # )
  end
end

puts 'Data seeded'